import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/Filters";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">Product List </div>
          </div>
        </div>
      </Container>
    </>
  );
}
