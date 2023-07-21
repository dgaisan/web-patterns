FROM golang:1.20-alpine

WORKDIR /myapp
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY *.go .

RUN go build -o /user-manager

EXPOSE 8001
CMD ["/user-manager"]