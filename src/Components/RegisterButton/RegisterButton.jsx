const RegisterButton = () => {
  // const [timer, setTimer] = useState("15 days 10 h 20 m 20 s left"); // Initial countdown set to 20 days
  // const Ref = useRef();

  // const getRemainingTime = (e) => {
  //   const total = Date.parse(e) - Date.parse(new Date());
  //   const days = Math.floor(total / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const seconds = Math.floor((total / 1000) % 60);

  //   return { total, days, hours, minutes, seconds };
  // };

  // const formatTime = (days, hours, minutes, seconds) => {
  //   return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // };

  // const startTimer = (e) => {
  //   let { total, days, hours, minutes, seconds } = getRemainingTime(e);
  //   if (total >= 0) {
  //     setTimer(formatTime(days, hours, minutes, seconds));
  //   }
  // };

  // const clearTimer = (e) => {
  //   if (Ref.current) {
  //     clearInterval(Ref.current);
  //   }
  //   const id = setInterval(() => {
  //     startTimer(e);
  //   }, 1000);
  //   Ref.current = id;
  // };

  // const getDateTime = () => {
  //   let deadline = new Date();
  //   deadline.setDate(deadline.getDate() + 15);
  //   return deadline;
  // };

  // useEffect(() => {
  //   const deadline = getDateTime();
  //   clearTimer(deadline);
  //   return () => clearInterval(Ref.current);
  // }, []);

  return (
    <div>
      <button className="border-2 px-4 py-2 rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black">
        Get Free Membership
      </button>
    </div>
  );
};

export default RegisterButton;
