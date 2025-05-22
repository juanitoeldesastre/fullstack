type Props = { 
  texto: string; 
};
export default function Titulo({ texto }: Props) { 
  return <h1>{texto}</h1>; 
}
