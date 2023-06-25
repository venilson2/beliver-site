import { useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Link from "next/link";

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOption, setSelectedOption] = useState("true");

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };


  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="block-tabs loaded">
      <ul>
        <li>
          <a
            className={activeTab === 0 ? "is-active" : ""}
            onClick={() => handleTabClick(0)}
          >
            Peça ajuda
          </a>
        </li>
        <li>
          <a
            className={activeTab === 1 ? "is-active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Faça Parte
          </a>
        </li>
      </ul>
      <div
        className={`block-tab-content ${
          activeTab === 0 ? "is-active" : ""
        }`}
      >
        <p>
          Este formulário é para solicitar assistência alimentar. Nossa equipe visitará você e 
          fornecerá alimentos para ajudar durante esse período difícil.
        </p>
        <form method="post">
          <Input name="name" label="Nome Completo" required positionColumn={"first-column"}/>
          <Input name="email" type="email" label="E-mail" required positionColumn={"last-column"}/>
          <Input name="zipcode" label="Cep" required positionColumn={"first-column"}/>
          <Input name="address" label="Endereço" required positionColumn={"last-column"}/>
          <Input name="number" type="number" label="Número" required positionColumn={"first-column"}/>
          <Input name="complement" label="Complemento" positionColumn={"last-column"}/>
          <Select 
            name="is-working" 
            label="Está trabalhando" 
            positionColumn={"first-column"} 
            options={[{ value: 'true', label: 'sim' },{ value: "false", label: 'não' },]} 
            value={selectedOption} 
            onChange={handleSelectChange}
            required
          />
          <Input name="profession" label="Profissão" positionColumn={"last-column"} required/>
          <Select 
            name="is-accept-visit" 
            label="Aceita visíta do pastor" 
            positionColumn={"first-column"} 
            options={[{ value: 'true', label: 'sim' },{ value: "false", label: 'não' },]} 
            value={selectedOption} 
            onChange={handleSelectChange}
            required
          />
          <Input name="date-schedule" type="date" label="Data da visíta" positionColumn={"last-column"} required/>
          <div className="site-content">
            <div className="text-center">
                <p><input type="checkbox"/><label>Li e aceito a politica de privacidade <span className="required">*</span></label></p>
                <Link href="/event" className="button button-big button-filled button-secondary">Agendar</Link> 
            </div>    
          </div>
        </form>
      </div>
      <div
        className={`block-tab-content ${
          activeTab === 1 ? "is-active" : ""
        }`}
      >
        <p>
          Este formulário permite que você contribua com doações de alimentos para o projeto. 
          Sua participação ajuda a alimentar pessoas necessitadas em nossa comunidade.
        </p>
        <form method="post">
            <Input name="name" label="Nome Completo" required positionColumn={"first-column"}/>
            <Input name="email" type="email" label="E-mail" required positionColumn={"last-column"}/>
            <Input name="zipcode" label="Cep" required positionColumn={"first-column"}/>
            <Input name="address" label="Endereço" required positionColumn={"last-column"}/>
            <Input name="number" type="number" label="Número" required positionColumn={"first-column"}/>
            <Input name="complement" label="Complemento" positionColumn={"last-column"}/>
            <Input name="date-schedule" type="date" label="Data da visíta" positionColumn={"first-column"} required/>
            <p style={{ visibility: 'hidden' }}><input/></p>
          <div className="site-content">
            <div className="text-center">
              <p><input type="checkbox"/><label>Li e aceito a politica de privacidade <span className="required">*</span></label></p>
              <Link href="/event" className="button button-big button-filled button-secondary">Agendar</Link> 
            </div>    
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabPanel;
