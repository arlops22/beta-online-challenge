import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { Button, Chip, IconButton, Typography } from "@material-tailwind/react";
import { ArrowLeftIcon, StarIcon } from "@heroicons/react/16/solid";

import getProduct from "@/api/products/getProduct";
import getAllProducts from "@/api/products/getAllProducts";
import { formatCurrency } from "@/utils/helper";

import ImageGallery from "@/components/ImageGallery";

export const getStaticPaths = (async () => {
    const data = await getAllProducts();

    const paths = data.products.map((product) => ({
        params: { id: product.id.toString() }
    }));

    return {
      paths: paths,
      fallback: false,
    }
}) satisfies GetStaticPaths;
  

// import { useRouter } from 'next/router';
export async function getStaticProps({ params }: GetStaticPropsContext<{id: string}>) {
    const data = await getProduct(params?.id as string);
   
    return { props: { data } };
}

  
export default function ProductPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const { data } = props;
    console.log('data', data)
    return (
        <div className="py-8">
            <div className="flex -mx-3">
                <div className="w-5/12 px-3">
                    <div className="flex flex-col items-start">
                        <IconButton
                            variant="text"
                            className="rounded-full mb-2 -ml-3"
                            onClick={() => router.back()}
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                        </IconButton>
                        <div className="flex items-center gap-4 mb-4">
                            <Typography 
                                variant='h2' 
                            >
                                {data.title}
                            </Typography>
                            <div className="flex items-center gap-1">
                                <StarIcon className="w-5 h-5 text-yellow-700" />
                                <Typography
                                    variant="small"
                                    className="text-yellow-700 font-semibold"
                                >
                                    {data.rating.toFixed(1)}
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                <Typography className="flex-1">
                                    Marca:
                                </Typography>
                                <Typography className="font-semibold">
                                    {data.brand}
                                </Typography>
                            </div>
                            <Chip 
                                size="sm" 
                                value={data.category} 
                                className="rounded-full"
                            />
                        </div>
                        <Typography
                            className="mb-4"
                        >
                            {data.description}
                        </Typography>
                        <div className="flex items-center gap-1 mb-4">
                                <Typography className="flex-1">
                                    Total em estoque:
                                </Typography>
                                <Typography className="font-semibold">
                                    {data.stock}
                                </Typography>
                            </div>
                        <div className="flex items-center gap-2 mb-6">
                            <Typography
                                variant="paragraph"
                                className="line-through text-gray-500"
                            >
                                {formatCurrency(data.price*(100 + data.discountPercentage)/100)}
                            </Typography>
                            <Typography
                                variant="h4"
                                className="text-blue-gray-800"
                            >
                                {formatCurrency(data.price)}
                            </Typography>
                        </div>
                        <Button size="lg" color="green">Buy now</Button>
                    </div>
                </div>
                <div className="w-7/12 px-3">
                    <ImageGallery 
                        images={data.images}
                    />
                </div>
            </div>
        </div>
    )
}
