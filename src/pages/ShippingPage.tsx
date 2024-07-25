import CardShipping from "@/components/shipping/CardShipping";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const shippingOptions = [
    { name: "GoSend", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyQDuujSmDAkPW3GoCII4rd9zIq7bC-BD1RB4xOVdj-HGXQCaxnJdI63n6YbsTYpE9QxQ5EsWWCSrotHoxGXBqOXfEbjHGMaflvceUxue7jqH9rRl6evQSoXn2dYPBH8VHmrwqo_TsKCC7odhZkIXn9F6D7FWSE0cqhXJIwAyvR6a6RijBepjAfbJR/s320/GKL24_GoSend%20-%20Koleksilogo.com.jpg" },
    { name: "Grab Express", image: "https://www.uob.com.sg/assets/web-resources/business/images/sme-hub/promotions-and-privileges/grab-express/grab-express-375x240.jpg" },
    { name: "Anter Aja", image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hgze1deepe26jew1e157mdz2.jpg" },
    { name: "JNE Express", image: "https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png" },
    { name: "J&T", image: "https://cdn.antaranews.com/cache/1200x800/2023/09/20/JT_Express_Logo_1.jpg" },
    { name: "Lion Parcel", image: "https://imagedelivery.net/2MtOYVTKaiU0CCt-BLmtWw/bb2fcb96-610f-45d1-74ed-285bbfdb6f00/w=900" },
    { name: "Ninja Express", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrl2hEy2KlLbSqFsjSTsusG-PcKG6X6gHoOA&s" },
    { name: "Pos Indonesia", image: "https://play-lh.googleusercontent.com/jSr8HN-Y_n2D47SMA4ppdcyxr1lrp4ISOJeO2Oztmo7nTwu_WpS_6KVB7Y4kpLZECA=w3840-h2160-rw" }
];

export default function ShippingPage() {
    return (
        <div className="bg-white rounded p-5">
            <div>
                <div>
                    <h1>Reguler (Cashless)</h1>
                    <p>Pembeli dapat melacak status pengiriman pesanan jika menggunakan Jasa Kirim yang Didukung Shopee</p>
                </div>
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem className="hover: bg-transparent" value="item-1">
                            <AccordionTrigger>Tutup</AccordionTrigger>
                            <AccordionContent>
                                {shippingOptions.map((option) => (
                                    <CardShipping key={option.name} name={option.name} image={option.image} />
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
