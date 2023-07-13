import ChatGPTForm from "./ChatGPTForm/ChatGPTForm";
import ChatGPTTable from "./ChatGPTTable/ChatGPTTable";

function GPTHome(): JSX.Element {
  return (
    <>
      <ChatGPTForm />
      <ChatGPTTable />
    </>
  );
}

export default GPTHome;
