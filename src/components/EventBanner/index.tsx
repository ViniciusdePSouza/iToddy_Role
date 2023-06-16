import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import {
  Container,
  EventDate,
  EventSpecifications,
  EventTittle,
} from "./styles";
import { ButtonHTMLAttributes } from "react";

interface EventBannerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  date: Date;
  img: string;
  title:string
}

export function EventBanner({
  date,
  title,
  img,
  ...rest
}: EventBannerProps) {
  const dateFormatted = dayjs(date)
    .locale("pt-br")
    .format(`dddd, DD [de] MMMM - hh:mm`);

  return (
    <>
      <Container>
        <img src={img} alt="" />
        <EventSpecifications>
          <EventDate>
            {dateFormatted}
          </EventDate>
          <EventTittle {...rest}>{title}</EventTittle>
        </EventSpecifications>
      </Container>
    </>
  );
}
