import Loading from "../loading";
import { Suspense } from 'react';
import EmailTemplateSlider from "./EmailTemplateSlider";
import Header from "./Header";
import OnboardingCarousel from "./OnboardingCarousel";
import PopupFormsSection from "./PopupFormsSection";


export default function Home() {
    return (
        
            <div className="">
                <Header />
                <div className="">
                    <OnboardingCarousel />
                    <EmailTemplateSlider />
                    <PopupFormsSection />
                </div>

            </div>
       

    );
}
