import { TipoUsuario } from "../enum/tipo-usuario.enum";

export class Usuario {
    public id: number;
    public nombre: string;
    public email: string;
    public contraseña: string;
    public tipo_usuario: TipoUsuario;
}
