import { useState, useEffect } from "react";
import { Skeleton } from "antd";

const ProgressiveSection = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // simulate loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        <Skeleton active paragraph={{ rows: 5 }} />
      </div>
    );
  }

  return children;
};

export default ProgressiveSection;