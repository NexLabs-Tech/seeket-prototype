import svgPaths from "./svg-tb4tmxcq2s";
import imgSee51 from "figma:asset/05a1133ac841e857a354dced99bf96c2cd765870.png";

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Marketplace</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.391px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[78.391px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Tu Agencia</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.578px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[43.578px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[57.156px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[57.156px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Ingresar</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#101828] grow h-[40px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[21.41px] not-italic text-[16px] text-nowrap text-white top-[8px] whitespace-pre">Registrarse</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[583.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[48px] h-[40px] items-center relative w-[583.531px]">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Navigation">
      <div className="h-[40px] relative shrink-0 w-[153px]" data-name="See (5) 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSee51} />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] w-[153px]" />
      </div>
      <Container />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-[1532px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[89px] items-start pb-px pt-[24px] px-[24px] relative w-[1532px]">
        <Navigation />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-start left-[432px] top-[-6px] w-[354.516px]" data-name="Text">
      <p className="bg-clip-text font-['Poppins:Regular',_sans-serif] leading-[60px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0)] text-center text-nowrap tracking-[-1.5px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }}>
        mejor agencia
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[120px] left-0 top-0 w-[896px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[60px] left-[249.5px] not-italic text-[60px] text-center text-neutral-950 top-[-6px] tracking-[-1.5px] translate-x-[-50%] w-[365px]">Encuentra la</p>
      <Text />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[60px] left-[448.45px] not-italic text-[60px] text-center text-neutral-950 text-nowrap top-[54px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre">para tu negocio</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[160px] top-[152px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[24px] left-[287.77px] not-italic text-[#6a7282] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Accede a servicios verificados para crecer tu negocio</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#101828] box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center left-[774.27px] px-[40px] py-[28px] rounded-[3.35544e+07px] top-px w-[121.734px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Buscar</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-gray-50 h-[58px] left-0 rounded-[3.35544e+07px] top-0 w-[762.266px]" data-name="Input">
      <div className="box-border content-stretch flex h-[58px] items-center overflow-clip pl-[56px] pr-[20px] py-[28px] relative rounded-[inherit] w-[762.266px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Buscar agencias...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[20px] size-[20px] top-[19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[58px] left-0 top-0 w-[762.266px]" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Container2 />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Servicio deseado</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-50 box-border content-stretch flex h-[36px] items-center justify-between ml-0 mt-0 px-[13px] py-px relative rounded-[8px] w-[290.656px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan />
      <Icon1 />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Ubicación</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-50 box-border content-stretch flex h-[36px] items-center justify-between ml-[302.667px] mt-0 px-[13px] py-px relative rounded-[8px] w-[290.672px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan1 />
      <Icon2 />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Industria</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-50 box-border content-stretch flex h-[36px] items-center justify-between ml-[605.333px] mt-0 px-[13px] py-px relative rounded-[8px] w-[290.656px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan2 />
      <Icon3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <PrimitiveButton />
      <PrimitiveButton1 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Idioma</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-50 box-border content-stretch flex h-[36px] items-center justify-between ml-0 mt-0 px-[13px] py-px relative rounded-[8px] w-[290.656px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan3 />
      <Icon4 />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Presupuesto</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-50 box-border content-stretch flex h-[36px] items-center justify-between ml-[302.667px] mt-0 px-[13px] py-px relative rounded-[8px] w-[290.672px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan4 />
      <Icon5 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <PrimitiveButton3 />
      <PrimitiveButton4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0">
      <Group1 />
      <Group />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Frame1 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white h-[662px] relative shrink-0 w-[1532px]" data-name="HeroSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[33px] h-[662px] items-start pb-0 pt-[128px] px-[318px] relative w-[1532px]">
        <Container1 />
        <Container4 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Preguntas Frecuentes</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[185.734px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">¿Cómo me afilio a Seeket?</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[289.844px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">¿Qué pasa si no encuentro lo que busco?</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[45px] left-0 top-px w-[301px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-3px] w-[301px]">¿Cuáles son los requisitos para registrar mi agencia?</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[135px] w-[323px]" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[89px] left-[0.5px] overflow-clip top-0 w-[317px]">
      <div className="absolute h-[66px] left-0 top-0 w-[254px]" data-name="See (5) 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSee51} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[320px] left-0 top-0 w-[323px]" data-name="Container">
      <Container5 />
      <Frame />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Contacto</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[56.016px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Soporte</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[37px] w-[66.109px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Dirección</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Redes</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[70.578px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Instagram</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[67.281px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Facebook</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[59.516px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">LinkedIn</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[9.438px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">X</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[204px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[320px] items-start left-[387px] top-0 w-[323px]" data-name="Container">
      <Heading2 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-gray-50 h-[50px] relative rounded-[3.35544e+07px] shrink-0 w-[529px]" data-name="Input">
      <div className="box-border content-stretch flex h-[50px] items-center overflow-clip px-[12px] py-[24px] relative rounded-[inherit] w-[529px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre">Correo Electrónico</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-gray-50 h-[50px] relative rounded-[3.35544e+07px] shrink-0 w-[529px]" data-name="Input">
      <div className="box-border content-stretch flex h-[50px] items-center overflow-clip px-[12px] py-[24px] relative rounded-[inherit] w-[529px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre">Asunto</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-gray-50 h-[64px] relative rounded-[24px] shrink-0 w-[529px]" data-name="Textarea">
      <div className="box-border content-stretch flex h-[64px] items-start overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-[529px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre">Comentario</p>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#101828] h-[48px] relative rounded-[3.35544e+07px] shrink-0 w-[529px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[245px] not-italic text-[14px] text-nowrap text-white top-[13.71px] whitespace-pre">Enviar</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[260px] items-start relative shrink-0" data-name="Form">
      <Input1 />
      <Input2 />
      <Textarea />
      <Button6 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[320px] items-start left-[774px] top-0" data-name="Container">
      <Heading4 />
      <Form />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1303px]" data-name="Container">
      <Container6 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white h-[481px] relative shrink-0 w-[1532px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[481px] items-center pb-0 pt-[64px] px-[64px] relative w-[1532px]">
        <Container11 />
      </div>
    </div>
  );
}

export default function LandingPageConGradientes() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Landing Page con Gradientes">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}