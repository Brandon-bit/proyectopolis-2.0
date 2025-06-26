import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BodySeccionParrafo(){
    return(
        <>
            <div className="grid gap-3">
                <Label htmlFor="parrafo">Párrafo</Label>
                <Textarea placeholder="Escribe tu parrafo aqui..."/>
            </div>
        </>
    )
}