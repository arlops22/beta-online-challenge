import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    return (
      <div className="py-8">
          <Typography variant='h2' className='mb-4'>Olá, Jeanne</Typography>

          <div className="flex">
            <div className="w-1/3">
              <Card className="mt-6 w-96">
                <CardBody>
                  <ShoppingBagIcon className="mb-4 h-12 w-12 text-gray-900" />
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Products
                  </Typography>
                  <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ullamcorper dolor.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button 
                    size="sm" 
                    variant="text" 
                    className="flex items-center gap-2"
                    onClick={() => router.push('/products')}
                  >
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
      </div>
    );
}
