import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Hero } from "../../components/Hero/Hero";
import { Categories } from "../../components/Categories/Categories";

const LandingPage = () => {
  return (
    <section>
      <PageHeader />
      <Hero />
      <Categories />
    </section>
  );
};

export { LandingPage };
