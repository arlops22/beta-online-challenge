import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { formatCurrency } from "@/utils/helper";

interface IProps {
    title: string
    description: string
    thumbnail: string
    price: number
    discount: number
    productId: string
}

const ProductCard = (props: IProps) => {
    const { productId, title, description, thumbnail, price, discount } = props;

    const router = useRouter();

    return (
        <Card className="mt-6 w-full h-[400px]">
            <CardHeader 
                color="white" 
                className="relative h-56 flex items-center justify-center"
            >
                <Image 
                    src={thumbnail} 
                    alt={title} 
                    width={400}
                    height={400}
                    className="w-full object-contain"
                />
            </CardHeader>
            <CardBody>
                <Typography 
                    variant="h5" 
                    color="blue-gray" 
                    className="mb-2"
                >
                    {title}
                </Typography>
                <Typography
                    className="line-clamp-2 h-14 mb-2"
                >
                    {description}
                </Typography>
                <div className="flex items-center gap-2">
                    <Typography
                        variant="small"
                        className="line-through text-gray-500"
                    >
                        {formatCurrency(price*(100 + discount)/100)}
                    </Typography>
                    <Typography
                        variant="h6"
                        className="text-blue-gray-800"
                    >
                        {formatCurrency(price)}
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={() => router.push(`/products/${productId}`)}>
                    See More
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard