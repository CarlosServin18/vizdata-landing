import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';
import { STRINGS } from '../../constants';

test('renders every post title and excerpt', () => {
  render(<Blog />);
  STRINGS.blog.items.forEach((post) => {
    expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument();
    expect(screen.getByText(post.excerpt)).toBeInTheDocument();
  });
});

test('renders the full body of every post', () => {
  render(<Blog />);
  STRINGS.blog.items.forEach((post) => {
    post.body.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });
});

test('toggling a post flips its expanded state independently', () => {
  render(<Blog />);
  const [first, second] = screen.getAllByRole('button', { name: STRINGS.blog.readMore });

  userEvent.click(first);
  expect(first).toHaveAttribute('aria-expanded', 'true');
  expect(second).toHaveAttribute('aria-expanded', 'false');

  userEvent.click(second);
  expect(first).toHaveAttribute('aria-expanded', 'false');
  expect(second).toHaveAttribute('aria-expanded', 'true');
});
