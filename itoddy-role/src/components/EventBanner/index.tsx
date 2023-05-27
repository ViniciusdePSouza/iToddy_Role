import {
  Container,
  EventDate,
  EventSpecifications,
  EventTittle,
} from "./styles";
import { ButtonHTMLAttributes } from "react";

interface EventBannerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  day: string;
  hour: string;
  title: string;
  img: string;
}

export function EventBanner({
  day,
  title,
  hour,
  img,
  ...rest
}: EventBannerProps) {
  return (
    <>
      <Container>
        <img src={img} alt="" />
        <EventSpecifications>
          <EventDate>
            {day} - {hour}
          </EventDate>
          <EventTittle {...rest}>{title}</EventTittle>
        </EventSpecifications>
      </Container>
    </>
  );
}
