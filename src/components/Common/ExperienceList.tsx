import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
  line-height: 1;
  font-size: 0.95rem;
  color: #333;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.4rem;
    line-height: 1;
    color: #4a90e2;
  }
`;

export default function ExperienceList({ items }: { items: string[] }) {
  return (
    <List>
      {items.map((text, index) => (
        <Item key={index} dangerouslySetInnerHTML={{ __html: text }} />
      ))}
    </List>
  );
}
