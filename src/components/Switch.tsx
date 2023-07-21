import { Switch as SwitchAria } from "react-aria-components";

interface SwitchProps {
  state: boolean;
  setState: (value: boolean) => void;
}

export default function Switch({ state, setState }: SwitchProps) {
  return (
    <SwitchAria
      isSelected={state}
      onChange={setState}
      className="inline-flex group"
    >
      <div className="w-9 h-6 bg-zinc-600 mr-4 group-data-[selected]:bg-green-500 duration-300 rounded-full border-2 border-transparent group-data-[focus-visible]:ring-2 ring-offset-2 ring-offset-zinc-50">
        <div className="h-5 w-5 shadow rounded-full bg-white group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2 transition-all duration-300 group-data-[pressed]:w-6" />
      </div>
      <span>Modo avion: {state ? "Encendido" : "Apagado"}</span>
    </SwitchAria>
  );
}
