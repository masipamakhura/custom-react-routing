import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id:'0',
      label:'first accordion item on a list ',
      content:'collapes first accordion item on a list content'
    },
    {
      id:'1',
      label:'second accordion item on a list ',
      content:'collapes second accordion item on a list content'
    },
    {
      id:'2',
      label:'third accordion item on a list ',
      content:'collapes third accordion item on a list content'
    }
  ];

  return (
    <Accordion items={items} />
    
  );
}
export default AccordionPage;
