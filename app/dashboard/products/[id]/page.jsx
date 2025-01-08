import React from 'react';
import Section from "@/components/section/Section";
import AxiosApi from "@/utils/axiosApi";
import getToken from "@/utils/getToken";
import ProductDetails from "@/components/ui/productdetails/ProductDetails";

const ProductDetailsPage = async ({params}) => {
    const api = new AxiosApi()
    const param = (await params).id
    const token = await getToken();
    let data = null;
    let error = null;

    try {
        data = await api.get(`/product/${param}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

    } catch (e) {
        console.error(e);
        error = e.message;
    }

    return (
        <div className={'page'}>
            <Section>
                {error ?
                    (
                        <span className={'text-red-500 dark:text-red-700'}>{error}</span>
                    ) :
                    (
                        <ProductDetails data={data} />
                    )}
            </Section>
        </div>
    );
};

export default ProductDetailsPage;