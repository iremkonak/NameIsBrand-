function formatAdminDateTime(date: Date) {
  const dateText = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(date);

  const timeText = new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Istanbul",
    weekday: "long",
  }).format(date);

  const [weekday, time] = timeText.split(" ");

  return {
    dateText,
    metaText: `${weekday}, ${time}`,
  };
}

export function AdminDate() {
  const { dateText, metaText } = formatAdminDateTime(new Date());

  return (
    <div>
      <strong>{dateText}</strong>
      <small>{metaText}</small>
    </div>
  );
}
