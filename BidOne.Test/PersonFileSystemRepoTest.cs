using BidOne.Repo.Concrete;
using FluentAssertions;
using Microsoft.Extensions.Configuration;
using Moq;
using System;
using System.Threading.Tasks;
using Xunit;

namespace BidOne.Test
{
    public class PersonFileSystemRepoTest
    {
        private Mock<IConfiguration> _config;
        public PersonFileSystemRepoTest()
        {
            _config = new Mock<IConfiguration>();
        }
        [Fact]
        public async Task ShouldThrowNullReferenceForEmptyPayload()
        {
            PersonFileSystemRepo repo = new PersonFileSystemRepo(_config.Object);

            Func<Task> act = async () => await repo.Save(null);

            await act.Should().ThrowAsync<NullReferenceException>();
        }

        [Fact]
        public async Task ShouldThrowNullReferenceForNullId()
        {
            PersonFileSystemRepo repo = new PersonFileSystemRepo(_config.Object);

            Func<Task> act = async () => await repo.Save(new Domain.Person() { Id = null });

            await act.Should().ThrowAsync<NullReferenceException>();
        }

        [Fact]
        public async Task ShouldGetConfigurationSectionWhenPassValidation()
        {
            Mock<IConfigurationSection> section = new Mock<IConfigurationSection>();
            section.Setup(s => s.Value).Returns("");
            _config.Setup(c => c.GetSection("AppSettings")).Returns(section.Object);
            PersonFileSystemRepo repo = new PersonFileSystemRepo(_config.Object);

            Func<Task> act = async () => await repo.Save(new Domain.Person() { Id = Guid.NewGuid() });

            await act();

            _config.Verify(c => c.GetSection("AppSettings"), Times.Once);
        }
    }
}
