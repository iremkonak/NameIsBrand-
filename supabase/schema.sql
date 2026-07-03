create extension if not exists pgcrypto;

create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  profession text,
  category text,
  country text,
  needs text[] not null default '{}',
  goal text,
  links text,
  contact_preference text,
  privacy_accepted boolean not null default false,
  admin_note text,
  status text not null default 'Bekleyen',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  consultation_request_id uuid references public.consultation_requests(id) on delete set null,
  full_name text not null,
  subject text not null,
  appointment_date date not null,
  appointment_time time not null,
  note text,
  status text not null default 'Bekliyor',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.service_packages (
  id uuid primary key default gen_random_uuid(),
  sort_order integer not null default 1,
  title text not null,
  description text,
  price text,
  included_items text[] not null default '{}',
  status text not null default 'Taslak',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_allowlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  role text not null default 'owner',
  created_at timestamptz not null default now()
);

insert into public.admin_allowlist (email, full_name, role)
values ('nameisbrandcom@gmail.com', 'Name Is Brand', 'owner')
on conflict (email) do update
set full_name = excluded.full_name,
    role = excluded.role;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists consultation_requests_updated_at on public.consultation_requests;
create trigger consultation_requests_updated_at
before update on public.consultation_requests
for each row execute function public.set_updated_at();

drop trigger if exists appointments_updated_at on public.appointments;
create trigger appointments_updated_at
before update on public.appointments
for each row execute function public.set_updated_at();

drop trigger if exists service_packages_updated_at on public.service_packages;
create trigger service_packages_updated_at
before update on public.service_packages
for each row execute function public.set_updated_at();

alter table public.consultation_requests enable row level security;
alter table public.appointments enable row level security;
alter table public.service_packages enable row level security;
alter table public.admin_allowlist enable row level security;

drop policy if exists "public can create consultation requests" on public.consultation_requests;
create policy "public can create consultation requests"
on public.consultation_requests
for insert
to anon, authenticated
with check (privacy_accepted = true);

drop policy if exists "authenticated admins can read requests" on public.consultation_requests;
create policy "authenticated admins can read requests"
on public.consultation_requests
for select
to authenticated
using (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
);

drop policy if exists "authenticated admins can update requests" on public.consultation_requests;
create policy "authenticated admins can update requests"
on public.consultation_requests
for update
to authenticated
using (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
)
with check (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
);

drop policy if exists "authenticated admins manage appointments" on public.appointments;
create policy "authenticated admins manage appointments"
on public.appointments
for all
to authenticated
using (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
)
with check (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
);

drop policy if exists "public can read active packages" on public.service_packages;
create policy "public can read active packages"
on public.service_packages
for select
to anon, authenticated
using (status = 'Aktif');

drop policy if exists "authenticated admins manage packages" on public.service_packages;
create policy "authenticated admins manage packages"
on public.service_packages
for all
to authenticated
using (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
)
with check (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
);

drop policy if exists "authenticated admins read allowlist" on public.admin_allowlist;
create policy "authenticated admins read allowlist"
on public.admin_allowlist
for select
to authenticated
using (
  exists (
    select 1 from public.admin_allowlist admin
    where lower(admin.email) = lower(auth.jwt() ->> 'email')
  )
);

insert into public.service_packages (id, sort_order, title, description, price, included_items, status)
values
  (
    '11111111-1111-4111-8111-111111111111',
    1,
    'Personal Name Audit',
    'Kisisel marka analizi ve temel konumlandirma calismasi.',
    'Teklif ile',
    array['Dijital iz on analizi', 'Kisisel marka konumlandirmasi', 'Profil metni onerileri', 'Ilk yol haritasi'],
    'Aktif'
  ),
  (
    '22222222-2222-4222-8222-222222222222',
    2,
    'Reputation Shield',
    'Itibar kalkani, guven mimarisi ve gorunurluk plani.',
    'Teklif ile',
    array['Itibar risk analizi', 'Guven mimarisi', 'Gorunurluk plani', 'Surec takip cercevesi'],
    'Taslak'
  )
on conflict (id) do update
set sort_order = excluded.sort_order,
    title = excluded.title,
    description = excluded.description,
    price = excluded.price,
    included_items = excluded.included_items,
    status = excluded.status;
