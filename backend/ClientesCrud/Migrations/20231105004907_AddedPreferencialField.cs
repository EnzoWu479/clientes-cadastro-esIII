using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClientesCrud.Migrations
{
    /// <inheritdoc />
    public partial class AddedPreferencialField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Senha",
                table: "Clientes");

            migrationBuilder.AddColumn<bool>(
                name: "Preferencial",
                table: "CartaoCredito",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Preferencial",
                table: "CartaoCredito");

            migrationBuilder.AddColumn<string>(
                name: "Senha",
                table: "Clientes",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
