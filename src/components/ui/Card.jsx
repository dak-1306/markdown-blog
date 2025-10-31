import { Link } from "react-router-dom";

function Card({ title, content, img, author, date, tags, onClick, href }) {
  const CardWrapper = href ? Link : "article";
  const baseClasses =
    "bg-surface text-text border border-border rounded-lg p-6 shadow-soft transition-all duration-150 ease-out hover:shadow-primary hover:-translate-y-1.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.998] focus-within:outline-none focus-within:ring-4 focus-within:ring-primary/10";
  const cardProps = href
    ? { to: href, className: baseClasses }
    : { className: baseClasses };

  if (onClick) {
    cardProps.onClick = onClick;
    cardProps.style = { cursor: "pointer" };
  }

  return (
    <CardWrapper {...cardProps}>
      {img && (
        <div className="w-full mb-4 rounded-md overflow-hidden bg-gray-100">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover block"
          />
        </div>
      )}

      <h2 className="font-heading text-lg text-text mb-2 leading-tight">
        {title}
      </h2>

      {content && (
        <p className="text-sm text-text-muted mb-4 line-clamp-3 leading-relaxed">
          {content}
        </p>
      )}

      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0 mb-4">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-primary-light text-primary-dark border border-primary-20 whitespace-nowrap"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {(author || date) && (
        <div className="flex items-center justify-between gap-3 text-xs text-text-muted flex-wrap mt-2">
          {author && (
            <span className="font-medium text-sm text-text">{author}</span>
          )}
          {date && (
            <span className="text-text-muted">
              {new Date(date).toLocaleDateString()}
            </span>
          )}
        </div>
      )}
    </CardWrapper>
  );
}

export default Card;
