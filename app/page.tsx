import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/Top-bar";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все Пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
