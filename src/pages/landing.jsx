import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";

const LandingPage = () => {
    return <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        <section className="text-center">
            <h1 className="flex flex-col items-center justify-center gradient-title text-4xl 
            font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
                Find Your Dream Job {" "}
                <span className="flex items-center gap-2 sm:gap-6">
                and get {" "} 
                <img src="/logo.png" alt="Hirrd logo" className="h-14 sm:h-24 lg:h-32"/>
                </span>
            </h1>
            <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">Explore thousands of job listings or find the perfect candidate</p>
        </section>
        <div className="flex gap-6 justify-center">
        <Link to='/jobs'>
        <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to='/post-job'>
        <Button size="xl" variant="destructive">Post a Job</Button>
        </Link>
        </div>
        <Carousel className="w-full py-10">
      <CarouselContent className="flex gap-5 sm:gap-20 items-center"> {companies.map(({ name, path, id }) => {
        return (<CarouselItem key={id} className="basis-1/3 lg:basis-1/6">  
             <img src={path} alt={name} className="h-9 sm:h-14 object-contain" />
             </CarouselItem>
             );})}
       
      </CarouselContent>
    </Carousel>
        <div>
            {/* buttons */}
            {/* carousel */}
        </div>
        {/* banner */}
        <section>
            {/* cards */}
        </section>
        {/* Accordion */}
    </main>
};

export default LandingPage;