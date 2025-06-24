import logo from '@/assets/images/logotipo.png';
import favicon from '@/assets/icons/favicon.ico';

// SideBar
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";

import SideBarModulo from './SideBarModulo';
import SideBarDropdown from './SideBarDropdown';
import { Link } from "react-router-dom";

const sideBarData = [
    {
        dni: 1,
        icono: "fas fa-cogs",
        titulo: "Proyectopolis",
        menus: [
            {
                dni: 1,
                icono: "fas fa-users",
                titulo: "Configuración",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            },
            {
                dni: 2,
                icono: "fas fa-users",
                titulo: "Cuentas    ",
                vistas: [
                    {
                        nombre: "Nueva",
                        link: "#"
                    },
                    {
                        nombre: "Lista",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 2,
        icono: '',
        titulo: '',
        menus: [
            {
                dni: 3,
                icono: 'fas fa-users',
                titulo: 'Usuarios',
                vistas: [
                    {
                        nombre: 'Lista',
                        link: '#'
                    },
                    {
                        nombre: 'Nuevo',
                        link: '#'
                    },
                    {
                        nombre: 'Registro de Sesiones',
                        link: '#'
                    }
                ]
            },
            {
                dni: 4,
                icono: 'fas fa-cogs',
                titulo: 'Configuración',
                vistas: [
                    {
                        nombre: "Control de acceso al menú",
                        link: "#"
                    },
                    {
                        nombre: "Logotipo",
                        link: "#"
                    },
                    {
                        nombre: "Días Inhabiles",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 3,
        icono: "fas fa-paper-plane",
        titulo: "Mejora Continua",
        menus: [
            {
                dni: 22,
                icono: "",
                titulo: "Configuración",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            },
            {
                dni: 5,
                icono: "",
                titulo: "Gestión de Proyectos",
                vistas: [
                    {
                        nombre: "Nueva",
                        link: "#"
                    },
                    {
                        nombre: "Lista",
                        link: "#"
                    }
                ]
            },
            {
                dni: 6,
                icono: "",
                titulo: "Diagramas de Decisión",
                vistas: [
                    {
                        nombre: "Nueva",
                        link: "#"
                    },
                    {
                        nombre: "Lista",
                        link: "#"
                    }
                ]
            },
            {
                dni: 7,
                icono: "",
                titulo: "Administración del Cambio",
                vistas: [
                    {
                        nombre: "Nueva",
                        link: "#"
                    },
                    {
                        nombre: "Lista",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 4,
        icono: "fas fa-paper-plane",
        titulo: "Mejora Continua Plus",
        menus: [
            {
                dni: 8,
                icono: "",
                titulo: "Procesos de Negocio",
                vistas: [
                    {
                        nombre: "Cadenas de Valor",
                        link: "/proceso/cadenasdevalor"
                    },
                    {
                        nombre: "Diagrama de Proceso",
                        link: "/proceso/diagramadeproceso"
                    },
                    {
                        nombre: "Implementación de Olas",
                        link: "/proceso/implementaciondeolas"
                    },
                    {
                        nombre: "Matriz de VoBo",
                        link: "proceso/matrizvobo"
                    },
                    {
                        nombre: "Metodología de Procesos",
                        link: "proceso/metodologia"
                    },
                    {
                        nombre: "Matriz Reducción de Tiempos (AsIs – ToBe)",
                        link: "proceso/reducciontiempos"
                    },
                    {
                        nombre: "RASCI",
                        link: "proceso/rasci"
                    },
                    {
                        nombre: "Tiempos y Movimientos",
                        link: "proceso/tiemposmovimientos"
                    }
                ]
            },
            {
                dni: 9,
                icono: "",
                titulo: "Manuales y Políticas",
                vistas: [
                    {
                        nombre: "Almacenamiento de Manuales y Políticas",
                        link: "/manualespoliticas"
                    },
                    {
                        nombre: "Configuración",
                        link: "/manualespoliticas/configuracion"
                    }
                ]
            },
            {
                dni: 10,
                icono: "",
                titulo: "Administración del Cambio",
                vistas: [
                    {
                        nombre: "Generación y Gestión Encuestas",
                        link: "/admoncambio/encuestas"
                    },
                    {
                        nombre: "Documentos de Capacitación",
                        link: "/admoncambio/capacitacion"
                    },
                    {
                        nombre: "Generación y Gestión de Exámenes",
                        link: "/admoncambio/examenes"
                    }
                ]
            }
        ]
    },
    {
        dni: 5,
        icono: "fas fa-sitemap",
        titulo: "Recursos Humanos",
        menus: [
            {
                dni: 11,
                icono: "",
                titulo: "Recursos Humanos",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 6,
        icono: "fas fa-bullhorn",
        titulo: "Marketing",
        menus: [
            {
                dni: 12,
                icono: "",
                titulo: "Marketing",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            },
            {
                dni: 13,
                icono: "",
                titulo: "Campañas",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 7,
        icono: "fas fa-hand-holding-usd",
        titulo: "Comercial",
        menus: [
            {
                dni: 14,
                icono: "",
                titulo: "Ventas",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 8,
        icono: "fas fa-money-bill-alt",
        titulo: "Administración",
        menus: [
            {
                dni: 15,
                icono: "",
                titulo: "Administración",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 9,
        icono: "fas fa-user-shield",
        titulo: "Admon. de la información",
        menus: [
            {
                dni: 16,
                icono: "",
                titulo: "Gestión",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            }
        ]
    },
    {
        dni: 10,
        icono: "fas fa-cog",
        titulo: "Operaciones y mantenimiento",
        menus: [
            {
                dni: 17,
                icono: "",
                titulo: "Configuración",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            },
            {
                dni: 18,
                icono: "",
                titulo: "Operaciones",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            },
            {
                dni: 19,
                icono: "",
                titulo: "Mantenimiento",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            },
            {
                dni: 20,
                icono: "",
                titulo: "Depreciación",
                vistas: [
                    {
                        nombre: "Opciones",
                        link: "#"
                    },
                    {
                        nombre: "Menú",
                        link: "#"
                    },
                    {
                        nombre: "Codigos Promocionales",
                        link: "#"
                    }
                ]
            },
        ]
    },
]

export default function AppSidebar() {
  const { open, isMobile } = useSidebar()
  const showLogo = isMobile || open ? logo : favicon
  

  return (
    <Sidebar collapsible="icon" variant='inset'>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='flex justify-center'>
              <Link to="/">
                <img src={showLogo}/>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        { isMobile || open ? (
            <ul className='mx-3.5'>
                {sideBarData.map((m) => (
                    <SideBarModulo modulo={m} key={m.dni}/>
                ))}
            </ul>
        ) : (
            <ul className='flex flex-col justify-center items-center'>
                {sideBarData.map((m) => (
                    <SideBarDropdown modulo={m} key={m.dni}/>
                ))}
            </ul>
        )}
        

        
        
      </SidebarContent>
    </Sidebar>
  )
}
