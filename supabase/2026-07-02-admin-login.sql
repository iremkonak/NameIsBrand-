

insert into public.admin_allowlist (email, full_name, role)
values ('nameisbrandcom@gmail.com', 'Name Is Brand', 'owner')
on conflict (email) do update
set full_name = excluded.full_name,
    role = excluded.role;
