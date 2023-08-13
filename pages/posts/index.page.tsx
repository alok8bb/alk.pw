import { ClientOnly, Loading } from "../../components/ClientOnly";

export { Page };

const Page = () => {
    return (
        <>
            <ClientOnly
                component={() => import("../../components/Navbar")}
                fallback={<Loading />}
            />
        </>
    );
};
