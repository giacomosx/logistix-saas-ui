import Section from "@/components/section/Section";
import NewRequestStepper from "@/components/ui/newrequeststepper/NewRequestStepper";

const NewRequest = () => {
    return (
        <div className="page">
            <Section>
                <NewRequestStepper />
            </Section>
        </div>
    );
};

export default NewRequest;