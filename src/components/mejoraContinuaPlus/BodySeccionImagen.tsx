import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function BodySeccionImagen(){
    const [preview, setPreview] = useState<string | null>(null);
    
    return(
        <>
            <div className="grid gap-3">
                <Label htmlFor="parrafo">Imagen</Label>
                <Input id="imagen-seccion" name="imagenseccion" type="file" accept="image/*" onChange={handleImagenChange} ref={fileInputRef}/>
                {preview && (
                    <div className="relative inline-block overflow-y-auto">
                        <img
                            src={preview}
                            alt="Previsualización"
                            className="rounded mx-auto"
                            style={{ maxWidth: "300px", marginTop: "10px" }}
                        />
                        <Badge 
                            variant="destructive" 
                            className="absolute top-1 right-1 cursor-pointer"
                            onClick={() => borrarImagen()}
                        >X</Badge>
                    </div>
                    
                )}
            </div>
        </>
    )
}