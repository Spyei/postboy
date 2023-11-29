import Input from "./Input";
import Tabs from "./Tabs";

export default function Home() {
    return (
        <main className="flex justify-center flex-col h-screen w-screen bg-neutral-950">
            <section className="w-screen p-3 flex items-center h-screen max-h-[1500px] max-w-screen flex-col">
                <div className="flex justify-center items-center h-full flex-col w-11/12 max-w-[2000px]">
                    <div className="w-11/12">
                        <Input />
                    </div>
                    <div className="flex gap-3 items-center w-11/12 h-full py-3">
                        <div className="bg-neutral-800 w-full h-full rounded-lg flex">
                            <div className="flex w-full justify-start m-3">
                                <Tabs tabs={[
                                    {
                                        name: "Headers"
                                    },
                                    {
                                        name: "Body"
                                    },
                                    {
                                        name: "Parameters"
                                    }
                                ]} />
                            </div>
                        </div>
                        <div className="bg-neutral-800 w-full h-full rounded-lg">
                        <div className="flex w-full justify-start m-3">
                                <Tabs tabs={[
                                    {
                                        name: "Request"
                                    },
                                    {
                                        name: "Response"
                                    }
                                ]} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}