import { formatDate } from "@quartz-community/utils/date";
import { getDate } from "@quartz-community/utils/sort";

interface Props {
  date: Date;
  locale?: string;
}

export { getDate };

export function DateComponent({ date, locale }: Props) {
  return (
    // We add 1 to the month because months start at 0 because someone making TypeScript decided to make months start at 0
    // for no logical reason so we have to add 1 here. This is stupid.
    <time datetime={date.toISOString()}>
      {date.getFullYear()}-{date.getUTCMonth() + 1}-{date.getUTCDate()}
    </time>
  );
}
