import { useRef, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import BodySeccionParrafo from "@/components/mejoraContinuaPlus/BodySeccionParrafo";

// Dialog
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type ProcedimientoSectionProps = {
    icono: string,
    textoBoton: string,
    titulo: string,
    tipo: string
}

export function NewProcedimientoSection({section, seccionesCount} : {section : ProcedimientoSectionProps, seccionesCount : number}){
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [filas, setFilas] = useState<string[][]>([[""]]);
    const [columns, setColumns] = useState<string[]>(["Columna 1"]);

    // Detecta cambios al seleccionar imagen 
    const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const url = URL.createObjectURL(file);
        setPreview(url);
        } else {
        setPreview(null);
        }
    };

    // Borra el preview de la imagen y del input
    const borrarImagen = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // esto borra el archivo del input
        }
        setPreview(null)
    }

    // Resetea el estado del componente cuando se cierra el dialog
    const resetDialog = () => {
        setPreview(null);
        setColumns(["Columna 1"]);
        setFilas([[""]]);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    // Detecta cuando cierra el dialog y manda a limpiar el estado
    const handleOpenChange = (isOpen: boolean) => {
        if (!isOpen) resetDialog(); // Se cerró el modal → limpia
        setOpen(isOpen);
    };

    // Agregar columna a la tabla
    const agregarColumna = () => {
        const nuevaColumna = `Columna ${columns.length + 1}`;
        setColumns([...columns, nuevaColumna]);
        setFilas(filas.map(fila => [...fila, ""]));
    };

    const agregarFila = () => {
        setFilas([...filas, new Array(columns.length).fill("")]); // nueva fila vacía
    };

    const actualizarColumna = (ix:number, valor: string) => {
        const nuevasColumnas = [...columns];
        nuevasColumnas[ix] = valor;
        setColumns(nuevasColumnas);
    }

    const actualizarCelda = (i: number, j: number, valor: string) => {
        const nuevasFilas = [...filas];
        nuevasFilas[i][j] = valor;
        setFilas(nuevasFilas);
    };

    return(
        <>
            <Dialog open={open} onOpenChange={handleOpenChange}>
                <form>
                    {/* Boton que dispara el dialog */}
                    <DialogTrigger asChild>
                        <Button variant="primary" size="sm"><i className={section.icono}></i>{section.textoBoton}</Button>
                    </DialogTrigger>

                    {/* Contenido del dialog */}
                    <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                        {/* Header */}
                        <DialogHeader>
                            <DialogTitle>{section.titulo}</DialogTitle>
                            <DialogDescription>
                            Agrega una nueva sección a tu procedimiento aqui, haz Click en guardar cuando estes listo.
                            </DialogDescription>
                        </DialogHeader>

                        {/* Body */}
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="name-1">Nombre de la sección</Label>
                                <div className="flex items-center gap-2">
                                    <p>{seccionesCount + 1}</p>
                                    <Input id="nombre-seccion" name="nombreseccion" defaultValue="Nueva Sección" />
                                </div>
                            </div>

                            {section.tipo == "parrafo" ? (
                                // Body tipo parrafo
                                <BodySeccionParrafo />
                            ) : section.tipo == "tabla" ? (
                                // Body tipo tabla
                                <div className="grid gap-3">
                                    <Label htmlFor="parrafo">Personalizar tabla</Label>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="secondary" onClick={() => agregarColumna()}><i className="fas fa-plus fa-sm"></i> Columna</Button>
                                        <Button size="sm" variant="secondary" onClick={() => agregarFila()}><i className="fas fa-plus fa-sm"></i> Fila</Button>
                                    </div>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                {columns.map((c, ix) => (
                                                    <TableHead key={ix}>
                                                        <Input id={`columna-${ix}`} name={`columna${ix}`} value={c} onChange={e => actualizarColumna(ix, e.target.value)}/>
                                                    </TableHead>
                                                ))}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filas.map((fila, fix) => (
                                                <TableRow key={fix}>
                                                    {fila.map((celda, cix) => (
                                                        <TableCell key={cix}>
                                                            <Input id={`celda-${cix}`} name={`celda${cix}`} value={celda} onChange={e => actualizarCelda(fix, cix, e.target.value)}/>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            ) : (
                                // Body tipo imagen
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
                            )}
                        </div>

                        {/* Footer */}
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="destructive">Cancelar</Button>
                            </DialogClose>
                            <Button variant="success">Guardar</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    )
}
