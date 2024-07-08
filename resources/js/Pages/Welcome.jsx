import { Link, Head } from '@inertiajs/react';
import Pricing from "@/Components/Pricing.jsx";
import {Navbar} from "@/Components/Marketing/Navbar.jsx";
import {Hero} from "@/Components/Marketing/Hero.jsx";
import Problem from "@/Components/Marketing/Problem.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion, plans }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Navbar/>

                <div className="">

                        <Hero/>
                        <Problem/>

                        <Pricing plans={plans}/>

                        <div>
                            {Object.entries(plans).map(([key, value]) => (
                                <div key={key}>
                                    <h3>{key}</h3>
                                    <p>{value.price}</p>
                                    <p>{value.description}</p>
                                </div>
                            ))}



                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
