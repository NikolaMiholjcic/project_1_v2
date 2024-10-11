import styles from "./Sidebar.module.scss";
import Logo from "../../../assets/svgs/Logo";
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo width={188} height={24} className={styles.logo} />
      <UncontrolledAccordion flush defaultOpen={["1", "2"]} stayOpen>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
}
