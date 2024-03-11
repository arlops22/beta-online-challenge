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
                        {/* <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix> */}
                        Home
                    </ListItem>
                </Link>
                <Link href='/products'>
                    <ListItem selected={router.asPath === '/products'}>
                        {/* <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix> */}
                        Produtos
                    </ListItem>
                </Link>
            </List>
        </Card>
    )
}

export default SideBar