import Partial from "@/Components/Partial";
import { Head } from "@inertiajs/react";

export default function Test({global,categories}){
    return (
        <>
            <Head>
                <title>{global.title}</title>
                <meta name="description" content={global.snippet}/>
            </Head>
            <h1>{global.title}</h1>
            <strong>{global.snippet}</strong>
            {categories.map(category=>
                <>
                    <h2><a href={"/category/"+category.id}>{category.name}</a></h2>
                    <Partial article={category.post}/>
                </>
            )}
        </>
    );
}
