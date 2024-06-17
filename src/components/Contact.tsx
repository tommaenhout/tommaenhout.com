import ActiveSection from "@/hooks/activeSection";
interface ContactProps {
  children: React.ReactNode;
  animationIn: boolean;
  animationOut: boolean;
}
const Contact = ({ children, animationIn, animationOut } : ContactProps) => {
  return (
    <div
      className={ActiveSection("contacts", animationIn, animationOut)}
      id="contacts"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Contact;
