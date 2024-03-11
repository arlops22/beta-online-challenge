import { HomeIcon, PowerIcon, ShoppingBagIcon } from '@heroicons/react/16/solid';
import { 
    Card, 
    List, 
    ListItem, 
    ListItemPrefix, 
    Typography 
} from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
    const router = useRouter();

    return (
        <Card className="fixed h-screen w-72 p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="mb-2 p-4">
                        <Typography 
                            variant="h5" 
                            color="blue-gray"
                        >
                            Beta Online
                        </Typography>
                    </div>
                    <List>
                        <Link href='/'>
                            <ListItem selected={router.asPath === '/'}>
                                <ListItemPrefix>
                                    <HomeIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Home
                            </ListItem>
                        </Link>
                        <Link href='/products'>
                            <ListItem selected={router.asPath === '/products'}>
                                <ListItemPrefix>
                                    <ShoppingBagIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Produtos
                            </ListItem>
                        </Link>
                    </List>
                </div>
                    <List>
                        <Link href='/'>
                            <ListItem className='text-red-400 hover:text-red-400' selected={router.asPath === '/'}>
                                <ListItemPrefix>
                                    <PowerIcon className="h-5 w-5 text-red-400" />
                                </ListItemPrefix>
                                Sair
                            </ListItem>
                        </Link>
                    </List>
            </div>
        </Card>
    )
}

export default SideBar