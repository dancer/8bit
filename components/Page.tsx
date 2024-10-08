interface PageProps {
  key: string;
  title: string;
  content: React.ReactNode; 
  children?: React.ReactNode; 
}


const Page: React.FC<PageProps> = ({ title, content, children }) => {
  return (
    <div className="page-content">
      {title && <h2 className="page-title">{title}</h2>}
      <p>{content}</p>
      {children}
    </div>
  );
};
export default Page;