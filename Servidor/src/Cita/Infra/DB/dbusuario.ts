export default interface DBUsuario {
    id: number;
    nombre: string;
    contrasena: string;
    tipo: 'admin' | 'agente';
}
