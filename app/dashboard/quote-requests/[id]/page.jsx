import React from 'react';
import AxiosApi from "@/utils/axiosApi";
import Section from "@/components/section/Section";
import RequestDetails from "@/components/ui/requestdetails/RequestDetails";
import getToken from "@/utils/getToken";

const RequestDetailsPage = async ({params}) => {
    const api = new AxiosApi()
    const param = (await params).id
    const token = await getToken();
    let data = null;
    let error = null;

    try {
        data = await api.get(`/rfq/${param}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

    } catch (e) {
        console.error(e);
        error = e.message;
    }


    return (
        <div className="page">
            <Section>
                {error ? <span>{error}</span> : <RequestDetails data={data} />}
            </Section>
        </div>
    );
};

export default RequestDetailsPage;