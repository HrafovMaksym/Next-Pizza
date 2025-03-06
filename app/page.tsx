import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/Filters";
import { ProductCard } from "@/components/shared/ProductCard";
import { ProductsGroupList } from "@/components/shared/ProductsGroupLists";
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
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 0,
                    name: "Mozzarella Pizza",
                    price: 30,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01953ced168c758399984df8561623a3.avif",
                  },
                  {
                    id: 1,
                    name: "Mozzarella Pizza",
                    price: 30,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01953ced168c758399984df8561623a3.avif",
                  },
                  {
                    id: 2,
                    name: "Mozzarella Pizza",
                    price: 30,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01953ced168c758399984df8561623a3.avif",
                  },
                ]}
                categoryId={0}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
