import { ButtonHTMLAttributes } from "react";
import { Container, InfoEvent } from "./styles";

import dayjs from "dayjs";

interface EventCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    date: Date;
    img: string;
    title:string
  }

export function EventCard({title, date, img}: EventCardProps) {

    const dateFormatted = dayjs(date)
    .locale("pt-br")
    .format(`dddd, DD [de] MMMM - hh:mm`);
    
    return (
        <Container>
             <img src={img} alt="" />
             <InfoEvent>
                <h1>{title}</h1>
                <span>{dateFormatted}</span>
             </InfoEvent>
        </Container>
    )
}