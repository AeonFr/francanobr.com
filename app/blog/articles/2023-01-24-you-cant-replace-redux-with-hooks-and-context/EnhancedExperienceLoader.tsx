export default function EnhancedExperienceLoader({title, subtitle, children}) {
  const [canLoadEnhancedExperience, setCanLoadEnhancedExperience] = useState(false);
  const [enhancedExperience, setEnhancedExperience] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p><em>{subtitle}</em></p>

      {children}
    </div>
  );
}
