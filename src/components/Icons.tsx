import { LucideProps } from "lucide-react";

export const Icons = {
    logo: (props: LucideProps) => (
      <svg width="200" height="180">
      <text x="20" y="90" fill="gray" stroke="lightblue" font-size="40" dominant-baseline="middle" text-anchor="middle">
        E
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 20 90"  
          to="360 20 90"  
          dur="10s"
          repeatCount="indefinite"/>
      </text>
</svg>

    )
}