FROM node:slim AS buildernode

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:slim

WORKDIR /app

COPY --from=buildernode /app/.next /app/.next
COPY --from=buildernode /app/public /app/public
COPY --from=buildernode /app/package.json /app/package.json
COPY --from=buildernode /app/package-lock.json /app/package-lock.json

RUN npm install --omit=dev

ENV NEXT_PUBLIC_API_URL=https://feed-pulse-api-dev.onrender.com/

ENV PORT=3000

EXPOSE $PORT

CMD npx next start -p $PORT

