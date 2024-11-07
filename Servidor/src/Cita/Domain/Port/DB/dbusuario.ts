export default interface DBUsuarioPort {
    id: number;
    nombre: string;
    contrasena: string;
    tipo: 'admin' | 'agente';
}
