import graphql from "../../lib/graphql";
import getAllProducts from '../../lib/graphql/queries/getAllProducts';
import getProductBySlug from '../../lib/graphql/queries/getProductBySlug';
import {Grid, Box, Image, Text, Button, Flex, Select, Divider, Spacer} from "@chakra-ui/react";
import { useState, useContext } from "react";

export async function getStaticProps({params}) {
    const { products } = await graphql.request(getProductBySlug, {slug: params.slug});
    return {
            props: {
                product: products[0],
            },
            
        };
}

    

export async function getStaticPaths() {
    const { products } = await graphql.request(getAllProducts);
    return {
     paths: products.map((product) => ({
        params: {
            slug: product.slug,
        },
     })),
      fallback: false,
    };
};

function SelectQuantity(props){
    const quantity = [...Array.from({length: 10})];
    return (
        <Select placeholder="Quantity" onChange={(event) =>
        props.onChange(event.target.value)}>
           {quantity.map((_, index) =>(
             <option key={index} value={index + 1}>
                {index + 1}
            </option>
           ))}
        
        </Select>
    )
}

export default function ProductPage({product}) {
    const [quantity, setQuantity] = useState(0);
    // const [items, setItems] = useContext(CartContext);

    function addToCart (){}
        return (
            <Flex>
                <Image src={product.images[0].url}/>
                <Box>
                
                    <Text>{product.name}</Text>
                    <Text textColor='gray.700'>{product.price / 100} PLN</Text>
                    <Text textColor='gray.700'>{product.description} PLN</Text>
                    <Divider my={3} />      
                    <Grid gridTemplateColumns='repeat(2,fr)' gap={5}>
                        <SelectQuantity onChange={(quantity) => setQuantity(parseInt(quantity))} />
                        <Button onClick={addToCart}>Add to cart</Button>
                    </Grid>
                </Box>
            </Flex>
        );
    }


