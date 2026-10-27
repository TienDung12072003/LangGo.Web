# LangGo — Frontend Architecture & Premium UI Guidelines

## 1. Project Goals

- Build a premium, friendly, motivating English-learning web application.
- Use the provided LangGo mockup as the primary visual reference.
- Prioritize usability, maintainability, performance, accessibility, and responsive design.
- Prefer simple, explicit solutions over unnecessary abstraction.
- Inspect the existing project and understand its architecture before making changes.
- Preserve existing working behavior unless the task explicitly requires changing it.

## 2. Architecture Principles

- Follow Feature-Sliced Design (FSD) principles when they fit the project's framework and complexity.
- Organize code around business features and domain responsibilities, not only technical file types.
- Keep dependencies explicit and avoid circular dependencies.
- Separate UI rendering, business logic, data access, and shared utilities where appropriate.
- Keep components focused on one clear responsibility.
- Extract reusable code when there is a genuine reuse case or a clear architectural benefit.
- Do not introduce extra abstraction, layers, or design patterns without a concrete reason.

### Established Project Structure (FSD)

```text
c:\LangGo\
├── package.json               # React 19 + TypeScript + Vite + Lucide Icons
├── tsconfig.json & tsconfig.app.json  # Cấu hình Path Alias @/*
├── vite.config.ts             # Server cấu hình alias @ -> ./src
├── index.html                 # Font chữ Plus Jakarta Sans & typography
├── .gitignore
│
└── src/
    ├── app/                   # Khởi tạo App, Styles toàn cục & Design Tokens
    │   ├── styles/
    │   │   ├── variables.css  # Soft Blue, Cyan, Lavender & Glassmorphism Tokens
    │   │   └── index.css      # Reset, Background Mesh Atmosphere
    │   ├── App.tsx            # Root App Container
    │   └── main.tsx           # Entry Point
    │
    ├── pages/                 # Ghép nối các trang hoàn chỉnh
    │   ├── dashboard/         # DashboardPage (Tổng quan học tập 3 cột)
    │   └── login/             # LoginPage (Trang đăng nhập Google & Email theo mockup)
    │
    ├── widgets/               # Các khối giao diện lớn độc lập
    │   ├── app-sidebar/       # Thanh Sidebar điều hướng chuẩn SaaS cao cấp
    │   ├── app-header/        # Header (Tìm kiếm, Notif, Theme, User dropdown)
    │   ├── hero-banner/       # Banner chào buổi sáng + cô gái học bài
    │   ├── stat-cards/        # 4 thẻ chỉ số thống kê
    │   ├── continue-learning/ # Thẻ bài học đang học dở (Unit 3)
    │   ├── weekly-activity/   # Biểu đồ cột hoạt động tuần
    │   ├── popular-lessons/   # Danh sách 4 bài học phổ biến
    │   ├── vocabulary-preview/# Danh sách 4 từ vựng cần ôn kèm phát âm
    │   └── right-stats-panel/ # Cột phải: Vòng tròn Streak, Top learners, Fluency quote
    │
    ├── features/              # Hành động & tính năng tương tác của người dùng
    │   ├── auth/              # Xác thực người dùng (Login Form, Google Sign-in, Context)
    │   ├── streak-tracker/    # Huy hiệu Streak với animation ngọn lửa
    │   └── practice-vocabulary/ # Modal luyện Flashcard tương tác (Lật thẻ + Phát âm)
    │
    ├── entities/              # Thực thể nghiệp vụ cốt lõi (Domain Models & UI)
    │   ├── user/              # User model types, UserAvatar
    │   ├── lesson/            # Lesson model types, LessonProgressCard
    │   └── vocabulary/        # WordItem model types, WordCard
    │
    └── shared/                # Dùng chung, không chứa logic nghiệp vụ
        ├── api/               # Base apiClient (sẵn sàng gọi C# API sau này)
        ├── lib/               # Utility functions (cn helper...)
        └── ui/                # UI Primitives theo hệ thống Glassmorphism
            ├── button/        # Button (Primary, Accent Cyan, Lavender, Secondary)
            ├── card/          # GlassCard (Kính mờ, viền tinh tế, bóng đổ mềm)
            ├── badge/         # Badge (Level, Part of speech, Trạng thái)
            └── progress/      # ProgressBar (Thanh tiến độ mềm mại)
```

### Dependency Rules

- Dependencies should flow toward lower-level, more reusable layers.
- `shared` must not depend on business-specific features, entities, widgets, or pages.
- `entities` must not depend on `features`, `widgets`, or `pages`.
- `features` must not depend on `widgets` or `pages`.
- Higher-level layers may compose lower-level layers.
- Avoid importing another slice's internal files directly. Use its intended public API where appropriate.
- Keep imports within the same slice organized and avoid circular dependencies.
- Apply these rules only where the corresponding FSD layers exist.

## 3. Frontend Engineering

- Follow the conventions of the existing framework, language, and project structure.
- Use TypeScript types for domain models, component props, and API contracts when TypeScript is available.
- Avoid `any` and unsafe type assertions unless justified.
- Keep API communication in a dedicated, reusable data-access layer.
- Handle loading, success, empty, error, and retry states where relevant.
- Keep server state separate from local UI state when the chosen tools support that distinction.
- Do not add a state management library when existing React state or context is sufficient.
- Avoid duplicated API calls, unnecessary re-renders, stale data, and race conditions.
- Never expose secrets or private API credentials in client-side code.
- Validate user input and handle API failures explicitly.

## 4. Design Direction

- Build a premium English-learning SaaS dashboard.
- Use the LangGo mockup as the visual reference.
- Use a soft blue, cyan, and lavender palette.
- Apply subtle glassmorphism, translucent white cards, soft shadows, and refined borders.
- Maintain clear typography, consistent spacing, and polished icons.
- Make the experience friendly, motivating, and easy to navigate.
- Avoid generic AI-generated layouts, excessive decoration, and inconsistent visual patterns.
- Preserve a clear information hierarchy and prioritize the primary learning action on each screen.

## 5. Design System

- Define reusable design tokens for colors, typography, spacing, radii, shadows, borders, and transitions.
- Store tokens centrally using the project's existing styling approach.
- Build reusable components for buttons, cards, inputs, navigation, dialogs, progress indicators, and feedback states when appropriate.
- Establish consistent variants, sizes, disabled states, hover states, and focus states.
- Reuse existing components before creating new ones.
- Keep business-specific components separate from generic shared UI primitives.
- Avoid duplicating styles across pages.
- Use semantic HTML and accessible component behavior.
- Do not create a new component abstraction for a one-off element unless it improves clarity or consistency.

## 6. Performance

- Prefer CSS gradients and lightweight effects.
- Use backdrop blur selectively and avoid expensive effects across large areas.
- Avoid unnecessary dependencies, excessive animation, and 3D effects.
- Optimize image formats, dimensions, and loading behavior.
- Lazy-load routes and heavy content when appropriate.
- Avoid premature memoization; profile or identify a credible performance issue before adding complexity.
- Avoid unnecessary React re-renders and large client-side bundles.
- Keep initial page loading fast, especially on mobile and slower networks.

## 7. Responsive Design and Accessibility

- Support desktop, tablet, and mobile layouts.
- Design mobile layouts intentionally instead of simply shrinking desktop content.
- Maintain readable contrast, visible focus states, and sufficiently large interactive targets.
- Support keyboard navigation and reduced-motion preferences.
- Use semantic landmarks, labels, and accessible names.
- Do not communicate important information through color alone.
- Test navigation, forms, dialogs, and learning interactions using keyboard input where practical.

## 8. Development Workflow

Before implementation:

1. Inspect the project structure, package configuration, dependencies, and existing conventions.
2. Understand the requested user flow and identify the affected features and entities.
3. Review the existing design system and reuse it where possible.
4. For significant architectural changes, explain the proposed structure and trade-offs before implementation.
5. Avoid unnecessary rewrites or unrelated changes.

During implementation:

1. Keep changes focused on the requested feature.
2. Follow the established architecture and dependency rules.
3. Reuse existing utilities and components where appropriate.
4. Implement loading, empty, error, disabled, and success states as needed.
5. Avoid introducing dependencies without a clear benefit.

After implementation:

1. Run relevant tests, type checks, linting, and the production build when available.
2. Fix errors introduced by the changes.
3. Verify important interactions and navigation.
4. Inspect the rendered UI in a browser when browser tools are available.
5. Check responsive layouts and visual consistency.
6. Report what was tested, what passed, and what could not be verified.
7. Never claim a test, build, or visual inspection was completed unless it actually was.

## 9. Skill Usage

- Use `fe-architect` for architecture decisions and trade-off analysis.
- Use `feature-sliced-design` when designing or refactoring the application structure.
- Use `frontend-design` for high-quality UI implementation.
- Use `ui-ux-pro-max` for UX decisions, design patterns, and visual consistency.
- Follow the relevant skill instructions when available and compatible with the project.
- Do not blindly follow a skill recommendation if it conflicts with the existing codebase, project requirements, or a simpler and safer solution.

## 10. Decision-Making Rules

When multiple approaches are viable:

- Prefer the simplest approach that meets current requirements and leaves a reasonable path for future growth.
- Explain meaningful trade-offs involving maintainability, performance, complexity, and delivery time.
- Do not introduce micro-frontends, complex state management, or elaborate abstractions without a demonstrated need.
- Do not sacrifice usability or accessibility solely for visual effects.
- Prioritize a working, consistent, maintainable product over unnecessary architectural sophistication.
